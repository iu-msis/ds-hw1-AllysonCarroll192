var commentTable = new Vue({
  el: '#comment',
  data: {
    comment: {
      id: 0,
      comment:''
    },
    commentForm: {},
    cArr:[]
  },

methods:{
  handleCommentForm(e) {
    e.preventDefault();

    const s = JSON.stringify(this.commentForm);

    console.log(s);

    fetch('/api/comment.php', {
      method:"POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: s
    })
    .then( response => response.json() )
    .then( json => {this.cArr.push(json)})
    .catch( err => {
      console.error('COMMENT POST ERROR:');
      console.error(err);
    })

    this.commentform = this.getEmptyCommentForm();

  },
  
getEmptyCommentForm() {
  return {
    id:0,
    comment: ''
  }
},

fetchComments () {
  fetch('/api/comment.php')
  .then( response => response.json() )
  .then( json => {commentApp.cArr = json} )
  .catch( err => {
    console.error('COMMENT FETCH ERROR:');
    console.error(err);

  })
},
creatd () {
  this.fetchComments();
}
});
