import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Stories from "./breakdown/Stories";
import Loader from "./breakdown/Loader";

const News = props => {
  const [state, setState] = useState([]);
  const [count, setCount] = useState(31);
  const [isLoading, setLoading] = useState(false);


  /* Different api parameters for different routes(currently only displaying top),
   planning on adding in the rest, these will be accessible via NavBar2 which has 
   been hidden temporarily. */
  const checkRoute = () => {
    let route;
    switch (props.location.pathname) {
      case "/":
        route = "/topstories";
        break;

      case "/shows":
        route = "/showstories";
        break;

      case "/ask":
        route = "/askstories";
        break;

      case "/jobs":
        route = "/jobstories";
        break;

      case "/top":
        route = "/topstories";
        break;

      case "/new":
        route = "/newstories";
        break;

      case "/best":
        route = "/beststories";
        break;

      default:
        route = "/notFound";
        break;
    }
    return route;
  };
  const formatComponent = (item, callback) => {
    setState(item);
    callback();
  };
  useEffect(() => {
    getData(checkRoute(), 0, 30).then(arr => {
      getDetails(arr).then(item =>
        formatComponent(item, () => {
          props.hideLoader();
        })
      );
    });
  }, []);

  const getData = async function(category, start, end) {
    const arr = [];
    try {
      const { data } = await axios.get(
        `https://hacker-news.firebaseio.com/v0${category}.json?print=pretty`
      );
      data.slice(start, end).map(item => arr.push(item));
    } catch (error) {
      return error;
    }
    return arr;
  };

  const getDetails = async function(arr) {
    const promises = arr.map(async item => {
      const { data } = await axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`
      );
      return {
        item,
        author: data.by,
        title: data.title,
        score: data.score,
        comments_count: data.descendants,
        time: data.time,
        url:
          data.url != null
            ? data.url
            : `https://news.ycombinator.com/item?id=${item}`
      };
    });
    const results = await Promise.all(promises);
    return results;
  };

  const showMoreContent = () => {
    setLoading(true);
    getData(checkRoute(), count, count + 30).then(arr => {
      getDetails(arr).then(item =>
        formatComponent(item, () => {
          setCount(count + 30);
          setLoading(false);
          window.scrollTo(0, 0);
        })
      );
    });
  };

  return (
    <>
      {props.isLoading ? (
        <Loader />
      ) : (
        <>
          <div
            className={
              isLoading
                ? "container-fluid main overlay"
                : "container-fluid main"
            }
          >
            <table className="table">
              <tbody>
                <Stories state={state} />
              </tbody>
            </table>
          </div>
          <div className="text-center m-1">
            <span className="more-btn " onClick={showMoreContent}>
              More
            </span>
          </div>
        </>
      )}
    </>
  );
};

export default withRouter(News);
