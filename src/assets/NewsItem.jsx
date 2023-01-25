import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, publishedAt } = props;
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden bg-[#e9eef5] shadow-lg dark:bg-slate-800">
        <img
          className="w-full"
          src={
            imageUrl != null
              ? imageUrl
              : "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png?20210219185637"
          }
          alt="..."
        />
        <div className="px-[1rem] py-4 ">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="text-left ml-[1rem]">
          <p className="text-[0.75rem] mb-2 m-1 text-gray-400">
            Last updated by {author === null ? "Unkown" : author} on{" "}
            {new Date(publishedAt).toGMTString()}
          </p>
          <a href={newsUrl} target="_blank">
            <button className="bg-blue-600 hover:bg-white text-white hover:text-black font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-3">
              Read More
            </button>
          </a>
        </div>
        {/* <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div> */}
      </div>
    </div>
  );
};

export default NewsItem;
