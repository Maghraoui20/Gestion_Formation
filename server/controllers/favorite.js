
import Favorite from "../models/favorite.js";

export const getFavorite = async (req,res) => {
    try {
     
      const favorite = await Favorite.find();
     
      res.status(200).json(
        favorite
             );
    } catch (error) {
      res.status(404).json({ message: error.message });

    };
  };