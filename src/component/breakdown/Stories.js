import React from "react";
import timeago from "epoch-timeago";

const Stories = ({ state }) => {
  return (
    <>
      {state.map(
        ({ item, author, title, score, comments_count, time, url }) => (
          <tr key={item}>
            <td style={{ padding: "0px" }}>
              <i
                className="fas fa-sort-up"
                style={{
                  fontSize: "30px",
                  marginTop: "16px",
                  padding: "0px",
                  marginRight: "0px",
                  color: "#ffffff"
                }}
              />
            </td>
            <td
              style={{
                padding: "0px",
                paddingTop: "13px",
                paddingRight: "15px",
                color: "#828282"
              }}
            >
              &nbsp;
              {score}
            </td>
            <td style={{ paddingRight: "80px", fontWeight: "600", color: "#828282"}}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            </td>
  
              <td style={{ color: "#ffffff" }}>
                <a
                  href={`https://news.ycombinator.com/user?id=${author}`}
                  target="_blank"
                  style={{ color: "#ffffff" }}
                  rel="noopener noreferrer"
                >
                  {author}
                </a>
              </td>
              <td style={{ color: "#ffffff" }}>
                <a
                  href={`https://${
                    url
                      .replace("http://", "")
                      .replace("https://", "")
                      .split(/[/?#]/)[0]
                  }`}
                  target="_blank"
                  style={{ color: "#828282" }}
                  rel="noopener noreferrer"
                >
                  {url
                    .replace("http://", "")
                    .replace("https://", "")
                    .split(/[/?#]/)[0]
                    .replace("www.", "")}
                </a>
              </td>
              <td style={{ color: "#ffffff" }}>
                 {timeago(time * 1000)}
              </td>
              <td style={{ color: "#828282" }}>
                <i className="far fa-comment-alt" style={{ color: "#ffffff" }} />{" "}
                <a
                  href={`https://news.ycombinator.com/item?id=${item}`}
                  target="_blank"
                  style={{ color: "#828282" }}
                  rel="noopener noreferrer"
                >
                  {comments_count}
                </a>
              </td>
          </tr>
        )
      )}
    </>
  );
};
export default Stories;

