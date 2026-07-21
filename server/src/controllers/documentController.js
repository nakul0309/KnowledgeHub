import streamifier from "streamifier";

import Document from "../models/Document.js";
import cloudinary from "../config/cloudinary.js";

export const uploadDocument = async (req, res) => {
    try {

        const { workspaceId } = req.body;
       let extractedText = "PDF text extraction coming in next step.";

        // Check if file exists
        if (!req.file) {
            return res.status(400).json({
                message: "No file uploaded",
            });
        }

        const uploadStream =
            cloudinary.uploader.upload_stream(
                {
                    resource_type: "raw",
                    folder: "knowledgehub",
                },

                async (error, result) => {

                    if (error) {
                        return res.status(500).json({
                            message: error.message,
                        });
                    }

                    const document = await Document.create({
                        title: req.file.originalname,

                        fileUrl: result.secure_url,

                        fileType: req.file.mimetype,

                        content: extractedText,

                        workspace: workspaceId,

                        uploadedBy: req.user._id,
                    });
                    res.status(201).json(document);
                }
            );

        streamifier
            .createReadStream(req.file.buffer)
            .pipe(uploadStream);

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }
};

export const getWorkspaceDocuments = async (req, res) => {
    try {
        const { workspaceId } = req.params;

        const documents = await Document.find({
            workspace: workspaceId,
        })
            .populate("uploadedBy", "name email")
            .sort({ createdAt: -1 });

        res.json(documents);

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};