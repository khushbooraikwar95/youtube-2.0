/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const commentsData = [
  {
    name: "Khushoo",
    text: "A verbal or written remark expressing an  opinion or reaction",
    replies: [
      {
        name: "Khushoo",
        text: "A verbal or written remark expressing an  opinion or reaction",
        replies: [],
      },
      {
        name: "Khushoo",
        text: "A verbal or written remark expressing an  opinion or reaction",
        replies: [],
      },
    ],
  },
  {
    name: "Khushoo",
    text: "A verbal or written remark expressing an  opinion or reaction",
    replies: [
      {
        name: "Khushoo",
        text: "A verbal or written remark expressing an  opinion or reaction",
        replies: [],
      },
      {
        name: "Khushoo",
        text: "A verbal or written remark expressing an  opinion or reaction",
        replies: [
          {
            name: "Khushoo",
            text: "A verbal or written remark expressing an  opinion or reaction",
            replies: [
              {
                name: "Khushoo",
                text: "A verbal or written remark expressing an  opinion or reaction",
                replies: [
                  {
                    name: "Khushoo",
                    text: "A verbal or written remark expressing an  opinion or reaction",
                    replies: [
                      {
                        name: "Khushoo",
                        text: "A verbal or written remark expressing an  opinion or reaction",
                        replies: [
                          {
                            name: "Khushoo",
                            text: "A verbal or written remark expressing an  opinion or reaction",
                            replies: [
                              {
                                name: "Khushoo",
                                text: "A verbal or written remark expressing an  opinion or reaction",
                                replies: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: "Khushoo",
                    text: "A verbal or written remark expressing an  opinion or reaction",
                    replies: [
                      {
                        name: "Khushoo",
                        text: "A verbal or written remark expressing an  opinion or reaction",
                        replies: [],
                      },
                      {
                        name: "Khushoo",
                        text: "A verbal or written remark expressing an  opinion or reaction",
                        replies: [
                          {
                            name: "Khushoo",
                            text: "A verbal or written remark expressing an  opinion or reaction",
                            replies: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Khushoo",
    text: "A verbal or written remark expressing an  opinion or reaction",
    replies: [],
  },
  {
    name: "Khushoo",
    text: "A verbal or written remark expressing an  opinion or reaction",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <div>
        <img
          className="w-8 h-8"
          alt="user image"
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
        />
      </div>
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        {/* Using Recursion we are mounting nested comments*/}
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
