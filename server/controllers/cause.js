import mongoose from "mongoose";
import Cause from "../models/cause";

export function createCause(req, res) {
  const cause = new Cause({
    _id: mongoose.Types.ObjectId(),
    title: req.body.title,
    description: req.body.description
  });

  return cause
    .save()
    .then(newCause => {
      console.log("response", newCause);
      return res.status(201).json({
        success: true,
        message: "Cause created successfully",
        Cause: newCause
      });
    })
    .catch(error => {
      res.status(500).json({
        success: false,
        message: "Cause could not created",
        error: error.message
      });
    });
}

export function getAllCauses() {
  Cause.find()
    .select("_id title description")
    .then(allCause => {
      return res.status(200).json({
        success: true,
        message: "A list of all causes",
        Cause: allCause
      });
    })
    .catch(err => {
      res.status(500).json({
        success: false,
        message: "Server error. Please try again.",
        error: err.message
      });
    });
}

export function getSingleCause(req, res) {
  const causeId = req.params.causeId;
  Cause.findById(causeId)
    .then(cause => {
      res.status(200).json({
        success: true,
        message: "A list of particular causes",
        Cause: cause
      });
    })
    .catch(error => {
      res.status(500).json({
        success: failure,
        message: "Server error, please try again",
        Cause: error.message
      });
    });
}

export function updateCause(req, res) {
  const causeId = req.params.causeId;
  const updateObj = req.body;
  Cause.update({ _id: causeId }, { $set: updateObj })
    .exec()
    .then(() => {
      res.status(200).json({
        success: true,
        message: "Cause Updated",
        Cause: updateObj
      });
    })
    .catch(() => {
      res.status(500).json({
        success: false,
        message: "Server error. Please try again."
      });
    });
}

export function deleteCause(req, res) {
  const causeId = req.params.causeId;
  Cause.findByIdAndRemove(causeId)
    .exec()
    .then(() => {
      res.status(200).json({
        success: true,
        message: "Removed cause."
      });
    })
    .catch(error => {
      res.status(500).json({
        success: false,
        message: "This cause doesn't exists",
        Cause: error.message
      });
    });
}
