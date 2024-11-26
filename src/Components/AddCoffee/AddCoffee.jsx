import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handelAddCoffee =e =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value
        const newCoffee={name,quantity,supplier,taste,category,details,photo};
        console.log(newCoffee);
        // send data to the server
        fetch("http://localhost:5000/coffee",{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

  return (
    <div className="w-9/12 mx-auto">
      <div className="bg-[#F4F3F0] p-24">
        <form onSubmit={handelAddCoffee}>
          <h1 className="text-center text-3xl font-extrabold">Add a Coffee</h1>
          {/* form name and quantity row */}
          <div className="md:flex  mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span>Coffee Name</span>
              </label>
              <label className="label">
                <input
                  type="text"
                  name="name"
                  id=""
                  placeholder="Coffee Name"
                  className="input input-bordered md:w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span>Available Quantity</span>
              </label>
              <label className="label">
                <input
                  type="text"
                  name="quantity"
                  id=""
                  placeholder="Available Quantity"
                  className="input input-bordered md:w-full"
                />
              </label>
            </div>
          </div>
            {/* form supplier and test row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span>Supplier Name</span>
              </label>
              <label className="label">
                <input
                  type="text"
                  name="supplier"
                  id=""
                  placeholder="Supplier Name"
                  className="input input-bordered md:w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span>Taste</span>
              </label>
              <label className="label">
                <input
                  type="text"
                  name="taste"
                  id=""
                  placeholder="Taste"
                  className="input input-bordered md:w-full"
                />
              </label>
            </div>
          </div>
          {/* form category and details row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span>Category</span>
              </label>
              <label className="label">
                <input
                  type="text"
                  name="category"
                  id=""
                  placeholder="Category"
                  className="input input-bordered md:w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span>Details</span>
              </label>
              <label className="label">
                <input
                  type="text"
                  name="details"
                  id=""
                  placeholder="Details"
                  className="input input-bordered md:w-full"
                />
              </label>
            </div>
          </div>
          {/* form Photo url row */}
          <div className=" mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span>Photo Url</span>
              </label>
              <label className="label">
                <input
                  type="text"
                  name="photo"
                  id=""
                  placeholder="Photo Url"
                  className="input input-bordered md:w-full"
                />
              </label>
            </div>
          </div>
          <input type="submit" value="Add Coffee" className="btn btn-block bg-black text-white" />
          
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
