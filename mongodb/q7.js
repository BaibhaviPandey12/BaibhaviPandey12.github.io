db.posts.insertMany([
  { _id: "p1", title: "Post 1" },
  { _id: "p2", title: "Post 2" }
])

db.comments.insertMany([
  { _id: "c1", postId: "p1", comment: "Comment1" },
  { _id: "c2", postId: "p1", comment: "Comment2" },
  { _id: "c3", postId: "p2", comment: "Comment1" },
  { _id: "c4", postId: "p2", comment: "Comment2" },
  { _id: "c5", postId: "p2", comment: "Comment3" }
])

db.posts.aggregate([
    {
        $lookup: {
            from: "comments",
            localField: "_id",
            foreignField: "postId",
            as: "comments"
    },
},
{$unwind:"$comments"},
{ $project: { _id: 1, title: 1, comments: 1 } }

])
db.comments.insertOne({_id:"c6",pid:"p1",comment:"This i comment 3 of post2"})

db.createCollection("marks");
db.marks.insertMany([

  { name: "john", term: "t1", subject: "maths", score: 98 },
    { name: "john", term: "t2", subject: "maths", score: 90 },
      { name: "john", term: "t3", subject: "maths", score: 95 },
        { name: "john", term: "t1", subject: "Science", score: 94 },
        { name: "john", term: "t2", subject: "Science", score: 92 },
          { name: "john", term: "t3", subject: "Science", score: 97},  
  { name: "cathy", term: "t1", subject: "maths", score: 92 },
   { name: "cathy", term: "t2", subject: "maths", score: 93 },
    { name: "cathy", term: "t3", subject: "maths", score: 95 },
     { name: "cathy", term: "t1", subject: "Science", score: 91},
      { name: "cathy", term: "t2", subject: "Science", score: 98 },
       { name: "cathy", term: "t3", subject: "Science", score: 90 }
     
    
])

db.marks.aggregate([
    {$group:{_id:"$name",AvgScore:{$avg:"$score"}}}
])

db.marks.aggregate([
    {$group:{_id:"$term",AvgScore:{$avg:"$score"}}}
])

db.marks.aggregate([
  {
    $group: {
      _id: { term: "$term", subject: "$subject" },
      AvgScore: { $avg: "$score" }
    }
  }
])

db.marks.aggregate([
  { $match: { name: "john" } }
])

db.marks.aggregate([
  { $match: { name: "john" } },
  {
    $group: {
      _id: {term:"$term",name:"$name"},
      AvgScore: { $avg: "$score" }
    }
  },
  { $sort: { _id: 1 } }
])

db.createCollection("studentInfo");

db.marks.insertMany([

{_id:"s1",name:"John"},     
   {_id:"s2",name:"Cathy"} 
])
db.marks.updateMany(

  {},{ $rename:{ "name": "sid"}}
)
db.marks.updateMany(

{sid:"John"},{$set:{sid:"s1"}}
)
db.marks.updateMany(

{sid:"Cathy"},{$set:{sid:"s2"}}
)

db.studentInfo.aggregate([
    {$lookup:{from:"marks",
        localField:"_id",
        foreignField:"sid",
        as:"marks"}
    },
    {$unwind:"$marks"},
    {$group:{_id:"$marks.term",AvgScore:{$avg:"$marks.score  "}}}
])