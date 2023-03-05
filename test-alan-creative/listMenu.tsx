import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Button from "../components/Button";
import Layout from "../components/Layout";

interface ProductsType {
  id?: number;
  nama_menu?: string;
  image?: string;
  harga?: number;
  onClick?: () => void;
}

const listMenu = () => {
  const [products, setProducts] = useState<ProductsType[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/product")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // ketika Rest API sukses, simpan data dari response ke dalam state lokal
        setProducts(data);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted.");
        }
      });
  }, []);

  return (
    <Layout>
      <div className="flex flex-col gap-5 m-5">
        <Link to="/add-food">
          <Button
            label="+ Tambah Menu"
            buttonSet="w-72 btn-outline rounded-none bg-[#00ACEE] text-white capitalize"
          />
        </Link>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full ">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Nama</th>
                <th>Foto</th>
                <th>Harga</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr>
                  <th>{product.id}</th>
                  <td>{product.nama_menu}</td>
                  <td>
                    <img src={product.image} className="w-24" />
                  </td>
                  <td>
                    Rp.{""}
                    {product.harga
                      ?.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default listMenu;
