import React from "react";
import { StyledButton } from "../../styled/control";

interface FileUploadButtonProps {
    name: string,
    title: string,
    onFileUploaded: (file: File) => void;
}

export default function FileUploadButton({name, title, onFileUploaded}: FileUploadButtonProps) {
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
            console.log("Unable to find " + buttonId);
            return;
        }
    
        audioFileButton.click();
    }

    return(
        <div id="fileUploadDiv">
            <input type="file" id={buttonId} onChange={onFileUpload} hidden />
            {/* <StyledButton>
                <button onClick={onUploadAudioFileClick}>
                    {title}
                </button>
            </StyledButton> */}
            <StyledButton
                key={title}
                onClick={onUploadAudioFileClick}
            >
                {title}
            </StyledButton>
        </div>
    );
}