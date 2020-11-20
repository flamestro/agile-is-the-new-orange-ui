import styled from "styled-components";
import React, {useState} from "react";
import ReactDOM from "react-dom";
import {StyledAddButton} from "../StyledAddButton/StyledAddButton";
import {white} from "../Colors/Colors";

export interface ModalProps {
    toggleModal: () => void,
    modalTriggered: boolean,
    childComp: React.ReactNode;
}

const WrapperModal = styled.div`
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    z-index: 1;
    background-color: ${white};
`;

export const Modal = ({modalTriggered, toggleModal, childComp}: ModalProps) => {
    const [triggered, toggleTriggered] = useState(modalTriggered)

    return (
        <React.Fragment>
            {
                modalTriggered ?
                    ReactDOM.createPortal(
                        <React.StrictMode>
                            <WrapperModal>
                                {childComp}
                                <StyledAddButton onClick={() => {
                                    toggleModal();
                                    toggleTriggered(!triggered);
                                }}> Close</StyledAddButton>
                            </WrapperModal>
                        </React.StrictMode>,
                        // @ts-ignore
                        document.getElementById('modal-root')
                    ) : null
            }
        </React.Fragment>
    );
}

