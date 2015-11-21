import {parse} from 'babylon';
import traverse from "babel-traverse";
import * as t from "babel-types";

export default function({ types: t }) {
  return {
    visitor: {
      BinaryExpression(path) {
        if (path.node.operator === "!=") {
          path.node.operator = "!=="
        } else if (path.node.operator === "==") {
          path.node.operator = "==="
        } else {
          return;
        }
      }
    }
  };
};
