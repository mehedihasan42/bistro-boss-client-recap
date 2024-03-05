import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const img_url = import.meta.env.VITE_IMAGE_URL
const AddItems = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
      const formData = new FormData();
      formData.append('image', data.file[0]);
      const res = await axios.post(`https://api.imgbb.com/1/upload?key=${img_url}`, formData)
      const image_URL = res.data.data.display_url

    const menuData = {name:data.name,category:data.category,price:data.price,recipe:data.details,image:image_URL}
    fetch('http://localhost:5000/menu',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(menuData)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.insertedId){
          reset()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Item added successfully",
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
  }
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="card">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Recipe name*</span>
              </label>
              <input
                type="text"
                placeholder="Recipe name"
                className="input input-bordered w-full"
                {...register("name", { required: true })}
              />
            </div>
            <div className="flex space-x-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category*</span>
                </label>
                <select className="select select-bordered w-96" {...register("category", { required: true })}>
                  <option disabled selected>
                    Category
                  </option>
                  <option value='salad'>Salad</option>
                  <option value='drinks'>Drinks</option>
                  <option value='dessert'>Dessert</option>
                  <option value='pizza'>Pizza</option>
                  <option value='soup'>Soup</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price*</span>
                </label>
                <input
                  type="text"
                  placeholder="Price"
                  className="input input-bordered w-96"
                  {...register("price", { required: true })}
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Recipe Details*</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                placeholder="Recipe Details"
                {...register("details", { required: true })}
              ></textarea>
            </div>
            <div className="form-control">
            <input type="file" {...register("file", { required: true })} className="file-input file-input-bordered file-input-sm w-full max-w-xs" />
            </div>
            <div className="form-control mt-6">
            <input className="btn bg-[#D1A054] text-white" type="submit" value='Add Item' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
