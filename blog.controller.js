// Please don't change the pre-written code

export const validateBlog = (req, res) => {
   // Write your code here
   const { title, description, image } = req.body;
   let errors = [];
 
   // Validate the "Title" field
   if (!title || title.trim() === "") {
     errors.push("The title field should not be empty");
   } 
   if (title.trim().length < 3) {
     errors.push("The title field should contain at least 3 characters");
   }
 
   // Validate the "Description" field
   if (!description || description.trim() === "") {
     errors.push("The description field should not be empty");
   } 
   if (description.trim().length < 10) {
     errors.push("The description field should contain at least 10 characters");
   }
 
   // Validate the "Image URL" field
   try {
     const validUrl = new URL(image);
   } catch (err) {
     errors.push("The image URL provided should be a valid URL");
   }
 
   if (errors.length > 0) {
    console.log(errors);
     return res.render("addBlog", { errors, success: false });
   }
 
   res.status(201).render("addBlog", { errors: null, success: true });
 };
export const renderBlogForm = (req, res) => {
  res.render("addBlog", { errors: null, success: false });
};
