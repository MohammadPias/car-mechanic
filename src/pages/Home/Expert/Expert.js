import React from 'react';

const Expert = ({expert}) => {
    const {name, img, expertize} = expert;
    return (
        <div id="experts" className="col-lg-3 col-md-6 col-sm-12">
            <img src={img} alt="" />
            <h4>Name: {name}</h4>
            <h6>{expertize}</h6>
        </div>
    );
};

export default Expert;