import React, { Component } from "react";
import { connect } from "react-redux";
import { doArchiveStory } from "../actions/archive";
import { getReadableStories } from "../selectors/story";

import "./Stories.css";

import Story from "./Story";
import { get } from "https";

const COLUMNS = {
  title: {
    label: "Title",
    width: "40%"
  },
  author: {
    label: "Author",
    width: "30%"
  },
  comments: {
    label: "Comments",
    width: "10%"
  },
  points: {
    label: "Points",
    width: "10%"
  },
  archive: {
    width: "10%"
  }
};

const Stories = ({ stories }) => (
  <div className="stories">
    <StoriesHeader columns={COLUMNS} />
    {(stories || []).map(story => (
      <Story
        key={story.objectID}
        story={story}
        columns={COLUMNS}
      />
    ))}
  </div>
);

const StoriesHeader = ({ columns }) => (
  <div className="stories-header">
    {Object.keys(COLUMNS).map(key => (
      <span key={key} style={{ width: COLUMNS[key].width }}>
        {COLUMNS[key].label}
      </span>
    ))}
  </div>
);

const mapStateToProps = state => ({
  stories: getReadableStories(state)
});

export default connect(
  mapStateToProps
)(Stories);
