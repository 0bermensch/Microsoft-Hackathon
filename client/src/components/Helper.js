import React, { Component } from "react";

export default class Helper {
  //input an object and a key and search for a value within it
  //found this code at: https://gist.github.com/shakhal/3cf5402fc61484d58c8d
  findValuesHelper = (obj, key, list) => {
    if (!obj) return list;
    if (obj instanceof Array) {
      for (var i in obj) {
        list = list.concat(this.findValuesHelper(obj[i], key, []));
      }
      return list;
    }
    if (obj[key]) list.push(obj[key]);
    if (typeof obj == "object" && obj !== null) {
      var children = Object.keys(obj);
      if (children.length > 0) {
        for (i = 0; i < children.length; i++) {
          list = list.concat(this.findValuesHelper(obj[children[i]], key, []));
        }
      }
    }
    return list;
  };

  //input an object and a key and search for a value within it
  findValues = (obj, key) => {
    return this.findValuesHelper(obj, key, []);
  };
  //just put this here because all class files MUST have a render function
  //has no functionality currently
  render() {
    return <></>;
  }
}
