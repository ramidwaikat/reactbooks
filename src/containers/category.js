const Category = (props) => {
  return <div  className="category">
      <img className="category__img"  src={require(`../../src${props.image}`).default}alt=""></img>
      <div className="category__paragraph">
          <div className="category__paragraph-caption">{props.title}</div>
          <div className="category__paragraph-text">{props.description}</div>
      </div>
  </div>;
};
export default Category;
