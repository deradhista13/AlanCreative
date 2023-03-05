import "../styles/index.css";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import Popup from "reactjs-popup";

interface ProductsType {
  id?: number;
  nama_menu?: string;
  image?: string;
  harga?: number;
  onClick?: () => void;
}

const LandingPage = () => {
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
      <div className="flex flex-row m-5 justify-center">
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col text-center items-center shadow-md gap-2 p-3 bg-white"
            >
              <img src={product.image} className="w-56" />
              <p className="font-bold text-black text-lg">
                {product.nama_menu}
              </p>
              <p className="font-bold text-[#00ACEE] text-lg">
                Rp.{""}
                {product.harga
                  ?.toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col px-10 ml-10 shadow-lg">
          <h3 className="font-bold text-2xl text-black text-center m-5">
            Pesanan
          </h3>
          <div className="grid grid-flow-row">
            <div className="flex flex-row justify-center items-center space-x-5 p-3">
              <img
                src="https://assets.pikiran-rakyat.com/crop/19x167:971x853/x/photo/2022/09/27/799023755.jpg"
                alt="product"
                className="h-16"
              />
              <p className="font-bold text-lg text-black">Sate Ayam</p>
              <p>x1</p>
              <p className="text-[#00ACEE]">Rp. 30.000</p>
            </div>
            <div className="flex flex-row justify-center items-center space-x-5 p-5">
              <img
                src="https://assets.pikiran-rakyat.com/crop/19x167:971x853/x/photo/2022/09/27/799023755.jpg"
                alt="product"
                className="h-16"
              />
              <p className="font-bold text-lg text-black">Sate Ayam</p>
              <p>x1</p>
              <p className="text-[#00ACEE]">Rp. 30.000</p>
            </div>
            <div className="flex flex-row justify-center items-center space-x-5 p-5">
              <img
                src="https://assets.pikiran-rakyat.com/crop/19x167:971x853/x/photo/2022/09/27/799023755.jpg"
                alt="product"
                className="h-16"
              />
              <p className="font-bold text-lg text-black">Sate Ayam</p>
              <p>x1</p>
              <p className="text-[#00ACEE]">Rp. 30.000</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center space-y-5">
            <Button
              buttonSet="w-96 btn-outline btn-error rounded-none capitalize "
              label="Clear Cart"
              type="submit"
            />
            <div className="flex flex-row justify-center items-center space-x-1">
              <Button
                buttonSet="w-48 bg-[#7CB083] text-white rounded-none border-none capitalize"
                label="Save Bill"
                type="submit"
              />
              <Button
                buttonSet="w-48 bg-[#7CB083] text-white rounded-none border-none capitalize"
                label="Print Bill"
                type="submit"
              />
            </div>

            <Button
              buttonSet="w-96 btn-outline rounded-none bg-[#00ACEE] text-white capitalize"
              label="Charge Rp.40.000"
              type="submit"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LandingPage;
