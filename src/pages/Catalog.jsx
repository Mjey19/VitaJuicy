import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Card from "../components/Card/Card";
function Catalog() {
  const dispatch = useDispatch();
  const catalogFilter = useSelector((state) => state.NavLink.type);
  const catalogActiveFilter = useSelector((state) => state.NavLink.linkId);
  const [CatalogItem, SetCatalogItem] = React.useState([]);

  const [CatalogLoading, SetCatalogLoading] = React.useState(true);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `https://65202f63906e276284c4270d.mockapi.io/Catalog?type=${catalogFilter}`;
        // if (catalogActiveFilter !== -1) {
        //   url = "https://65202f63906e276284c4270d.mockapi.io/Catalog";
        // }
        if (catalogFilter && catalogActiveFilter !== -1) {
          let url = `https://65202f63906e276284c4270d.mockapi.io/Catalog?type=${catalogFilter}`;
        } else {
          url = "https://65202f63906e276284c4270d.mockapi.io/Catalog";
        }
        const res = await axios.get(url);
        SetCatalogItem(res.data);
        SetCatalogLoading(false);
      } catch (error) {
        alert(error);
      }
    };

    fetchData();
  }, [SetCatalogItem, catalogFilter]);

  return (
    <div className="catalog">
      <div className="catalog_title-block">
        <h1>{catalogFilter ? catalogFilter : "товары"}</h1>
      </div>
      {CatalogLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="menu-inner">
          {CatalogItem.map((obj, id) => (
            <Card key={id} {...obj} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Catalog;
