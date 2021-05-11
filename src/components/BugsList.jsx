import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBugs, getUnresolvedBugs, resolveBug } from "./../store/bugs";

const BugsList = () => {
  const dispatch = useDispatch();
  const bugs = useSelector(getUnresolvedBugs);
  useEffect(() => {
    dispatch(loadBugs());
  }, []);

  return (
    <div>
      <ul>
        {bugs.map((bug) => (
          <React.Fragment>
            <li key={bug.id}>{bug.description}</li>
            <button onClick={() => dispatch(resolveBug(bug.id))}>Delete</button>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default BugsList;
