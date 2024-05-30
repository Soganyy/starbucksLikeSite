import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

const SideBar = async () => {
  const req = await fetch(`https://api.mirafgan.me/starbucks`, {
    cache: "no-store",
  });
  const data = await req.json();

  return (
    <div
      className="d-flex flex-column p-3 bg-light"
      style={{ height: "100vh", width: "25%" }}
    >
      <ul className="nav nav-pills flex-column mb-auto">
        {data.map((item) => {
          return (
            <li className="nav-item" key={item.slugName}>
              <h4 className="nav-link active" aria-current="page">
                {item.name}
              </h4>
              <ul className="nav flex-column ms-3">
                {item.children.map((child) => (
                  <li className="nav-item" key={child.slugName}>
                    <Link
                      className="nav-link"
                      href={{
                        pathname: `/menu/${child.slugName}`,
                        query: { category: item.slugName,
                          sub_category: child.slugName
                         },
                      }}
                    >
                      {child.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
