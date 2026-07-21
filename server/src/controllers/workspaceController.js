import Workspace from "../models/Workspace.js";
import User from "../models/User.js";

export const createWorkspace = async (req, res) => {
  try {
    const { name, description } = req.body;

    const workspace = await Workspace.create({
      name,
      description,
      owner: req.user._id,
      members: [req.user._id],
    });

    await User.findByIdAndUpdate(
      req.user._id,
      {
        $push: {
          workspaces: workspace._id,
        },
      }
    );

    res.status(201).json(workspace);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getMyWorkspaces = async (req, res) => {
  try {
    const workspaces = await Workspace.find({
      members: req.user._id,
    }).populate("owner", "name email");

    res.json(workspaces);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};