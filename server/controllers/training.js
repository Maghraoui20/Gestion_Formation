import Training from "../models/training.js";
import Categorie from "../models/categorie.js";
import Gouvernorat from "../models/gouvernorat.js";
import City from "../models/cities.js";
import Former from "../models/former.js";
export const getSearchedTraining = async (req, res) => {
  try {
    const wordsearched = req.query.InputSearch.toLowerCase().replace(
      /\s\s+/g,
      " "
    );

    const trainings = await Training.aggregate([
      {
        $lookup: {
          from: "formers",
          localField: "id_former",
          foreignField: "_id",
          as: "formateurs",
        },
      },

      /*   {
        $unwind: "$formateurs",
      },  */
      {
        $lookup: {
          from: "centres",
          localField: "id_center",
          foreignField: "_id",
          as: "centres",
        },
      },

      /*  {
        $unwind: "$centres",
      },  */
      /* {
        $addFields: {
          fullName: { $concat: ["$formateurs.nom", " ", "$formateurs.prenom"] },
          fullNameInverse: {
            $concat: ["$formateurs.prenom", " ", "$formateurs.nom"],
          },
        },
      },  */
      /* {
        $lookup: {
          from: "centres",
          localField: "id_centre",
          foreignField: "_id",
          as: "centres",
        },
      },
      {
        $unwind: "$centres",
      },
     
      */
      /*  {   
        $project:{
          fullName: { $concat: ["$formateurs.nom", " ", "$formateurs.prenom"] },
          fullNameInverse: {
            $concat: ["$formateurs.prenom", " ", "$formateurs.nom"],
          },
          "centres._id":0,
          "formateurs._id":0
        } 
    }, */
      {
        $match: {
          $or: [
            { name: { $regex: wordsearched } },
            { description: { $regex: wordsearched } },
            { "formateurs.lastname": { $regex: wordsearched } },
            { "centres.lastname": { $regex: wordsearched } },

            { "formateurs.firstname": { $regex: wordsearched } },
            { fullName: { $regex: wordsearched } },
            { fullNameInverse: { $regex: wordsearched } },
          ],
        },
      },
    ]);

    console.log("Training", trainings);

    res.status(200).json(trainings);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getnotshowfilter = async (req, res) => {
  try {
    const page = parseInt(req.query.page || "1");
    console.log("page numéro", req.query.page);

    const PAGE_SIZE = 3;

    const Alltraining = await Training.find({})
      .limit(PAGE_SIZE)
      .skip(PAGE_SIZE * (page - 1));

    console.log("filter masqué");
    const total = await Training.countDocuments();

    //console.log("Alltraining", Alltraining);

    res.status(200).json({
      Alltraining,
      totalPages: Math.ceil(total / PAGE_SIZE),
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getTrainings = async (req, res) => {
  try {
    const page = parseInt(req.query.page || "1");
    console.log("page numéro", req.query.page);
    const PAGE_SIZE = 2;
    const minPrice = req.query.value[0];
    const maxPrice = req.query.value[1];
    console.log(minPrice, maxPrice);
    const minHeure = req.query.heures[0];
    const maxHeure = req.query.heures[1];
    console.log(minHeure, maxHeure);
    const datedebut = req.query.datedeb;
    console.log(datedebut);
    const datefin = req.query.datefin;
    console.log(datefin);
    const inputsearched = req.query.InputSearch.replace(/\s\s+/g, " ");
    console.log(inputsearched);

    let idscategories = [];
    if (req.query.categoriesids && req.query.categoriesids.length > 0) {
      console.log("in if ", req.query.categoriesids);

      idscategories = req.query.categoriesids;
    } else {
      const cats = await Categorie.find({}, { _id: 1 });

      cats.map((el) => {
        idscategories.push(el._id);
      });
    }

    let idsgouvernorat = [];
    if (req.query.gouvernoratid && req.query.gouvernoratid.length > 0) {
      idsgouvernorat = req.query.gouvernoratid;
    } else {
      const gouver = await Gouvernorat.find({}, { _id: 1 });
      gouver.map((el) => {
        idsgouvernorat.push(el._id);
      });
    }

    let idscity = [];
    if (req.query.cityid && req.query.cityid.length > 0) {
      idscity = req.query.cityid;
    } else {
      const cities = await City.find({}, { _id: 1 });
      cities.map((el) => {
        idscity.push(el._id);
      });
    }

    const Alltraining = await Training.find({
      $and: [
        { name: { $regex: inputsearched } },
        { idcategorie: { $in: idscategories } },

        { price: { $gte: minPrice, $lte: maxPrice } },
        { periode: { $gte: minHeure, $lte: maxHeure } },
        { idcategorie: { $in: idscategories } },

        { idgouvernorate: { $in: idsgouvernorat } },
        { idcity: { $in: idscity } },
        datedebut === "1920-01-01"
          ? { firstdate: { $gte: datedebut } }
          : { firstdate: datedebut },
        datefin === "2030-01-01"
          ? { lastdate: { $lte: datefin } }
          : { lastdate: datefin },
      ],
    })
      .limit(PAGE_SIZE)
      .skip(PAGE_SIZE * (page - 1));

    console.log("houni1");
    const total = await Training.countDocuments();
    console.log("Alltraining", Alltraining);

    res.status(200).json({
      Alltraining,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateTraining = async (req, res) => {
  const { id: _id } = req.params;
  const training = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("Aucune formation avec cet id");

  const updatedTraining = await Training.findByIdAndUpdate(
    _id,
    { ...training, _id },
    { new: true }
  );
  res.json(updatedTraining);
};

export const deleteTraining = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("Aucune formation avec cet id ");
  await Training.findByIdAndRemove(id);
  res.json({ message: "la formation a ete supprimer avec succés !" });
};

export const getrecentTraining = async (req, res) => {
  try {
    const page = parseInt(req.query.page || "1");
    console.log("page numéro", req.query.page);

    const PAGE_SIZE = 3;

    const Alltraining = await Training.find()
      .sort({ createdAt: -1 })
      .limit(PAGE_SIZE)
      .skip(PAGE_SIZE * (page - 1));

    const total = await Training.countDocuments();
    // console.log("total", total);
    //console.log("Alltraining", Alltraining);
    //let totalPages = Math.ceil(total / PAGE_SIZE);
    //console.log("totalpages", totalPages);
    res.status(200).json({
      Alltraining,
      totalPages: Math.ceil(total / PAGE_SIZE),
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getOneTraining = async (req, res) => {
  try {
    const ids = req.query.id;

    console.log(ids);
    const OneTraining = await Training.find({ _id: ids });

    console.log("OneTraining", OneTraining);

    res.status(200).json({
      OneTraining,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const creatTraining = async (req, res) => {
  const {
    name,
    firstdate,
    lastdate,
    hour,
    price,
    namecity,
    periode,
    numberplace,
    planning,
    description,
    objectif,
    skills,
    selectedimage,
    idcity,
    idgouvernorate,
    idcategorie,
    longitude,
    latitude,
    createdAt,
  } = req.body;

  const newTraining = new Training({
    name,
    firstdate,
    lastdate,
    hour,
    price,
    namecity,
    periode,
    numberplace,
    planning,
    description,
    objectif,
    skills,
    selectedimage,
    idcity,
    idgouvernorate,
    idcategorie,
    longitude,
    latitude,
    createdAt,
  });
  try {
    await newTraining.save();
    res.status(201).json(newTraining);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getAllTrainings = async (req, res) => {
  try {
    const trainingall = await Training.find();
    res.status(200).json(trainingall);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getnameFormer = async (req, res) => {
  try {
    let idsforme = [];

    const traing = await Training.find({}, { id_former: 1 });
    {
      traing.map((e) => idsforme.push(e.id_former));
    }
    const nameformer = await Former.find({ _id: { $in: idsforme } });

    res.status(200).json(nameformer);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};