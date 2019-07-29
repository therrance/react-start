let my_news = [
  {
    author: "Саша Печкин",
    text: "В четверг, четвертого числа..."
  },
  {
    author: "Просто Вася",
    text: "Считаю, что $ должен стоить 35 рублей!"
  },
  {
    author: "Гость",
    text: "Бесплатно. Скачать. Лучший сайт - http://localhost:3000"
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <h3>News</h3>
        <News data={my_news} />
      </div>
    );
  }
}

class News extends React.Component {
  render() {
    let data = this.props.data;
    let newsTemplate;

    if (data.length > 0) {
      newsTemplate = data.map((item, index) => (
        <Article data={item} key={index} />
      ));
    } else {
      newsTemplate = <p>No news</p>;
    }
    return (
      <div className="news">
        {newsTemplate}
        <strong className={"news__count " + (data.length > 0 ? "" : "none")}>
          News: {data.length}
        </strong>
      </div>
    );
  }
}

class Article extends React.Component {
  render() {
    let author = this.props.data.author;
    let text = this.props.data.text;

    return (
      <div className="article">
        <p className="news__author">{author}</p>
        <p className="news__text">{text}</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
