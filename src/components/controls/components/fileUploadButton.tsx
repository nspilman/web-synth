import React from "react";

interface FileUploadButtonProps {
    name: string,
    onFileUploaded: (file: File) => void;
}

export default function FileUploadButton({name, onFileUploaded}: FileUploadButtonProps) {
    const buttonId = name + "_fileUploadButton";

    const onFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        var file = e.currentTarget.files?.item(0);
        if (!file) {
            console.log("File is undefined: " + file);
            return;
        }

        onFileUploaded(file);
      }
    
    const onUploadAudioFileClick = () => {
        var audioFileButton = document.getElementById(buttonId);
        if (!audioFileButton) {
            console.log("Unable to find audioFileButton");
            return;
        }
    
        audioFileButton.click();
    }

    return(
        <div id="fileUploadDiv">
            <input type="file" id={buttonId} onChange={onFileUpload} hidden />
            <button onClick={onUploadAudioFileClick}>
                {name}
            </button>
        </div>
    );
}