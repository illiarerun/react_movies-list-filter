(this["webpackJsonpreact_movies-list-filter"]=this["webpackJsonpreact_movies-list-filter"]||[]).push([[0],{14:function(e,t,i){},15:function(e,t,i){},16:function(e,t,i){},18:function(e,t,i){"use strict";i.r(t);var a=i(8),s=i.n(a),n=(i(13),i(2)),r=i(3),c=i(5),l=i(4),o=i(1),m=i.n(o),d=(i(14),i(15),i(16),i(0)),h=function(e){var t=e.movie,i=t.imdbUrl,a=t.imgUrl,s=t.description,n=t.title;return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{className:"card-image",children:Object(d.jsx)("figure",{className:"image is-4by3",children:Object(d.jsx)("img",{src:a,alt:"Film logo"})})}),Object(d.jsxs)("div",{className:"card-content",children:[Object(d.jsxs)("div",{className:"media",children:[Object(d.jsx)("div",{className:"media-left",children:Object(d.jsx)("figure",{className:"image is-48x48",children:Object(d.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(d.jsx)("div",{className:"media-content",children:Object(d.jsx)("p",{className:"title is-8",children:n})})]}),Object(d.jsxs)("div",{className:"content",children:[s,Object(d.jsx)("br",{}),Object(d.jsx)("a",{href:i,children:"IMDB"})]})]})]})},j=function(e){var t=e.movies;return Object(d.jsx)("div",{className:"movies",children:t.map((function(e){return Object(d.jsx)(h,{movie:e},e.imdbId)}))})},b=i(7),v=function(e){Object(c.a)(i,e);var t=Object(l.a)(i);function i(){var e;Object(n.a)(this,i);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={query:""},e.handleSearch=function(t){e.setState({query:t.target.value});var i=e.props.movies.filter((function(t){var i=t.title,a=t.description,s=e.state.query.toLowerCase();return i.toLowerCase().includes(s)||a.toLowerCase().includes(s)}));e.props.handleMoviesChange(i)},e}return Object(r.a)(i,[{key:"render",value:function(){var e=this.state.query;return Object(d.jsx)("div",{className:"box",children:Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{htmlFor:"search-query",className:"label",children:"Search movie"}),Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("input",{type:"text",id:"search-query",className:"input",placeholder:"Type search word",value:e,onChange:this.handleSearch})})]})})}}]),i}(m.a.Component),p=function(e){Object(c.a)(i,e);var t=Object(l.a)(i);function i(){var e;Object(n.a)(this,i);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={movies:b,visibleMovies:b},e.handleMoviesChange=function(t){e.setState({visibleMovies:t})},e}return Object(r.a)(i,[{key:"render",value:function(){var e=this.state,t=e.movies,i=e.visibleMovies;return Object(d.jsxs)("div",{className:"page",children:[Object(d.jsxs)("div",{className:"page-content",children:[Object(d.jsx)(v,{movies:t,handleMoviesChange:this.handleMoviesChange}),Object(d.jsx)(j,{movies:i})]}),Object(d.jsx)("div",{className:"sidebar",children:"Sidebar goes here"})]})}}]),i}(m.a.Component);s.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')}},[[18,1,2]]]);
//# sourceMappingURL=main.181ca850.chunk.js.map