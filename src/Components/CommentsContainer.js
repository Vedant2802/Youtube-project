import React from "react";

const commentsData = [
  {
    name: "Akshat Vedant",
    comment: "Lorem ipsum .....",
    replies: [],
  },
  {
    name: "Akshat Vedant",
    comment: "Lorem ipsum .....",
    replies: [],
  },
  {
    name: "Akshat Vedant",
    comment: "Lorem ipsum .....",
    replies: [
      {
        name: "Akshat Vedant",
        comment: "Lorem ipsum .....",
        replies: [
          {
            name: "Akshat Vedant",
            comment: "Lorem ipsum .....",
            replies: [
              {
                name: "Akshat Vedant",
                comment: "Lorem ipsum .....",
                replies: [
                  {
                    name: "Akshat Vedant",
                    comment: "Lorem ipsum .....",
                    replies: [
                      {
                        name: "Akshat Vedant",
                        comment: "Lorem ipsum .....",
                        replies: [
                          {
                            name: "Akshat Vedant",
                            comment: "Lorem ipsum .....",
                            replies: [
                              {
                                name: "Akshat Vedant",
                                comment: "Lorem ipsum .....",
                                replies: [
                                  {
                                    name: "Akshat Vedant",
                                    comment: "Lorem ipsum .....",
                                    replies: [
                                      {
                                        name: "Akshat Vedant",
                                        comment: "Lorem ipsum .....",
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
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Akshat Vedant",
    comment: "Lorem ipsum .....",
    replies: [],
  },
  {
    name: "Akshat Vedant",
    comment: "Lorem ipsum .....",
    replies: [],
  },
  {
    name: "Akshat Vedant",
    comment: "Lorem ipsum .....",
    replies: [],
  },
  {
    name: "Akshat Vedant",
    comment: "Lorem ipsum .....",
    replies: [],
  },
  {
    name: "Akshat Vedant",
    comment: "Lorem ipsum .....",
    replies: [],
  },
  {
    name: "Akshat Vedant",
    comment: "Lorem ipsum .....",
    replies: [],
  },
  {
    name: "Akshat Vedant",
    comment: "Lorem ipsum .....",
    replies: [],
  },
  {
    name: "Akshat Vedant",
    comment: "Lorem ipsum .....",
    replies: [],
  },
  {
    name: "Akshat Vedant",
    comment: "Lorem ipsum .....",
    replies: [],
  },
  {
    name: "Akshat Vedant",
    comment: "Lorem ipsum .....",
    replies: [],
  },
  {
    name: "Akshat Vedant",
    comment: "Lorem ipsum .....",
    replies: [],
  },
];

// i have to use recursion to create more comments
const Comment = (props) => {
  const { name, comment } = props.data ?? {};

  return (
    <div className="flex shadow-sm bg-gray p=2 rounded-lg">
      <img
        className="w-12 h-12 p-3"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
      ></img>
      <div>
        <p className="font-bold">{name}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
};

// const CommentsList = ({ comments }) => {
//   console.log(">>>", comments);
//   return comments.map((comment, index) => (
//     <div>
//       <Comment key={index} data={comment} />
//       <div className="pl-5 border border-l-black ml-5">
//         {/* <Comment key={index} data={c} />
//         <Comment key={index} data={c} />
//         <Comment key={index} data={c} />
//         <Comment key={index} data={c} /> */}
//         <CommentsList comment={comment.replies} />
//       </div>
//     </div>
//   ));
// };

const CommentsList = ({ comments }) => {
  if (!Array.isArray(comments) || comments.length === 0) {
    return null; // No comments to render
  }

  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments </h1>
      {/* <Comment data={commentsData[2]} /> */}
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
