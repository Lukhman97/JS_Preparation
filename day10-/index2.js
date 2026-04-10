async function updated(id) {

    const update = {
        title: "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",
        // price: 10000000,
        // description: "My shirt>>>>>>>..........",
        // category: "men's clothing",
        // rating: {
        //     rate: 3.9,
        //     count: 12000
        // }
    };

    try {

        // 1️⃣ UPDATE
        const response = await fetch(
            `https://fakestoreapi.com/products/${id}`,
            {
                // method: "PUT",
                method:"PATCH",
                headers: {   // ✅ fixed
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(update)
            }
        );

        if (!response.ok) {
            throw new Error("Update failed");
        }

        const updatedData = await response.json();
        console.log("Updated Object:", updatedData);

        // 2️⃣ GET ALL DATA
        const allProductsResponse = await fetch(
            "https://fakestoreapi.com/products"
        );

        const allProducts = await allProductsResponse.json();
        console.log("All Products:", allProducts);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

updated(1);