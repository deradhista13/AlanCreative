import React from "react";
import Button from "../components/Button";
import Layout from "../components/Layout";

const addMenu = () => {
  return (
    <Layout>
      <div className="flex flex-col my-5 mx-20 border p-10 space-y-3">
        <h3 className="font-bold text-xl text-[#00ACEE]  ">Tambahkan Menu</h3>
        <form action="">
          <div className="flex flex-col py-3">
            <label className="font-semibold">Nama Menu</label>
            <input
              className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-3/2"
              type="text"
              placeholder="Nama Menu"
            />
          </div>

          <div className="flex flex-col py-3">
            <label className="font-semibold">Upload Foto Menu</label>
            <input
              type="file"
              className="file-input file-input-bordered file-input-[#38E54D]  w-full max-w-md"
            />
          </div>

          <div className="flex flex-col py-3">
            <label className="font-semibold">Harga Menu</label>
            <input
              className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-3/2"
              type="text"
              placeholder="Harga Menu"
            />
          </div>
          <div className="flex flex-col py-3 items-end">
            <Button
              buttonSet="w-64 btn-outline rounded-none bg-[#7CB083] text-white capitalize"
              label="Simpan"
              type="submit"
            />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default addMenu;
