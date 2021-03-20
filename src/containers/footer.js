

const Footer = (props) => {
  const followUs = [{ link: "Facebook" }, { link: "Twitter" }, { link: "RSS" }];
  const categories = [
    { link: "Art" },
    { link: "Biography" },
    { link: "Business" },
    { link: "Childrens" },
    { link: "Christian" },
    { link: "Classic" },
    { link: "Comics" },
    { link: "Contemporary" },
    { link: "cookbooks" },
    { link: "Crime" },
    { link: "Ebooks" },
    { link: "Fantasy" },
    { link: "Fiction" },
    { link: "Gay and Lesbian" },
    { link: "Graphic Novels" },
    { link: "Historical Fiction" },
    { link: "History" },
    { link: "Horror" },
    { link: "Homer and Comedy" },
    { link: "Manga" },
    { link: "Hemoir" },
    { link: "Music" },
  ];
  const navi = [
    { link: "Home" },
    { link: "Books" },
    { link: "Reviews" },
    { link: "News" },
    { link: "Contacts" },
  ];
  const lstFollowUs = Object.keys(followUs).map((linkKey) => {
    return <li className="footer__link"  key={linkKey}>{followUs[linkKey].link}</li>;
  });

  const lstCategories = Object.keys(categories).map((linkKey) => {
    return <li className="footer__link" key={linkKey}>{categories[linkKey].link}</li>;
  });
  const lstNavi = Object.keys(navi).map((linkKey) => {
    let  style =  navi[linkKey].link=== 'Books' ?  "footer__link footer__link__special " :  "footer__link" ;
    return <li className={style} key={linkKey}>{navi[linkKey].link}</li>;
  });
  return (
    <div className="footer">
      <div className="footer__navigation">
        <div className="footer__caption">navigation</div>
        <div className="footer__navigation_items">{lstNavi}</div>
      </div>
      <div className="footer__categories">
     
          <div className="footer__caption">categories</div>
          <div className="footer__categories-items">{lstCategories}</div>
       
      </div>
      <div className="footer__follow-us">
        <div className="footer__caption">follow us</div>
        <div className="footer__follow-us_items">{lstFollowUs}</div>
      </div>
    </div>
  );
};
export default Footer;
