import styled from "styled-components";
import React from "react";
import ReactDOM from "react-dom";
import {white} from "../Colors/Colors";
import {HideGlobalScrollbar} from "../../App/App";

export interface ModalProps {
    toggleModal: () => void,
    modalTriggered: boolean,
    childComp: React.ReactNode;
}

export interface WrapperModalProps {
    scroll: number,
}

const WrapperModal = styled.div`
    position: absolute;
    top: ${(props: WrapperModalProps) => props.scroll + "px"};
    bottom: -${(props: WrapperModalProps) => props.scroll + "px"};
    left: 0;
    right: 0;
    opacity: 0.9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    z-index: 1;
    background-color: ${white};
`;

export const Modal = ({modalTriggered, childComp}: ModalProps) => {
    return (
        <React.Fragment>
            {
                modalTriggered ?
                    ReactDOM.createPortal(
                        <React.StrictMode>
                            <WrapperModal scroll={window.scrollY}>
                                {childComp}
                            </WrapperModal>
                            <HideGlobalScrollbar/>
                        </React.StrictMode>,
                        // @ts-ignore
                        document.getElementById('modal-root')
                    ) : null
            }
        </React.Fragment>
    );
}

