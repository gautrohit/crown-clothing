import React from "react";
import CollectionItem from "../collection-item/CollectionItem";
import "./previewCollection.scss";
const PreviewCollection = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherCollectionItemData }) => (
          <CollectionItem key={id} {...otherCollectionItemData} />
        ))}
    </div>
  </div>
);

export default PreviewCollection;
