const PageBanner = ({ bgnone, pageName, title, pageTitleImage }) => {
  return (
    <section
      className={`page-title-area ${bgnone ? "" : " page-title-bg"}`}
      style={{
        backgroundImage: !bgnone
          ? `url(${
              pageTitleImage
                ? pageTitleImage
                : "assets/img/section-bg/page-title.jpg"
            })`
          : "",
      }}
    >
      <div className="container">
        <h1 className="page-title">{title}</h1>
        <ul className="breadcrumb-nav">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <i className="fas fa-angle-right" />
          </li>
          <li>{pageName ? pageName : title}</li>
        </ul>
      </div>
    </section>
  );
};
export default PageBanner;
