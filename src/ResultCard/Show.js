import "./style.css";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const Show = (props) => {

    const { imageUrl, name, description, rating } = props;

    const [flag, setFlag] = useState(false);

    const handleModal = () => {
        setFlag(!flag);
    }

    return (
        <div className="card-wrapper">
            <img className="card-image" src={imageUrl} alt="Card cover" />
            <div className="bottom-container">
                <h6>{name}</h6>

                <div>
                    <Button onClick={handleModal} >Description</Button>
                    <Modal show={flag} >

                        <Modal.Header>
                            <h3>Summary of: {name}</h3>
                        </Modal.Header>

                        <Modal.Body>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: description,
                                }}
                            />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={handleModal}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>

                {/* 
                 <div
                    dangerouslySetInnerHTML={{
                        __html: description,
                    }}
                    style={{ color: "red" }}
                />  */}

                <div>{rating}</div>
            </div>
        </div>
    );
};
export default Show;
