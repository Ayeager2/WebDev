import React, { useState } from "react";
import {
    XMarkIcon,
    PaperClipIcon,
    PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
import Dropzone from "react-dropzone";

const StandardMessageForm = (props, activeChat) => {
    const [message, setMessage] = useState("");
    const [attachment, setAttachment] = useState("");
    const [preview, setPreview] = useState("");

    const handleChange = (e) => setMessage(e.target.value);
    const handleSubmit = async () => {
        const date = new Date().toISOString
            .replace(/T/, " ")
            .replace("Z", `${Math.floor(Math.random() * 1000)}+00:00`);
            const at = attachment ? [{blob: attachment, file:attachment.name}] : [];
            const form = {
              attachments: at, 
              created: date,
              sender_username: props.username,
              text: message,
              activeChatId: activeChat.id,

            }
    };

    return (
        <div className="message-form-container">
            {preview && (
                <div className="message-form-preview">
                    <img
                        alt="message-form-preview"
                        className="message-form-preview-image"
                        src={preview}
                        onLoad={() => URL.revokeObjectURL(preview)}
                    />
                    <XMarkIcon
                        className="message-form-icon-x"
                        onClick={() => {
                            setPreview("");
                            setAttachment("");
                        }}
                    />
                </div>
            )}
            <div className="message-form">
                <div className="message-form-input-container">
                    <input
                        type="text"
                        className="message-form-input"
                        value={message}
                        onChange={handleChange}
                        placeholder="Send a message..."
                    />
                </div>
                <div className="message-form-icons">
                    <Dropzone
                        acceptedFiles=",jpg, .joeg, .png"
                        multiple={false}
                        onClick={true}
                        onDrop={(acceptedFiles) => {
                            setAttachment(acceptedFiles[0]);
                            setPreview(URL.createObjectURL(acceptedFiles[0]));
                        }}
                    >
                        {({ getRootProps, getInputProps, open }) => (
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <PaperClipIcon
                                    className="message-form-icon-clip"
                                    onClick={open}
                                />
                            </div>
                        )}
                    </Dropzone>
                    <hr className="vertical-line" />
                    <PaperAirplaneIcon
                        className="message-form-icon-airplane"
                        onClick={() => {
                            setPreview("");
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default StandardMessageForm;
