import React from 'react';
// import PropTypes from 'prop-types';
import { useState } from 'react'
import IconSwitch from '../IconSwitch/IconSwitch';
import CardsView from '../CardsView/CardsView';
import products from '../products';

function Store(props) {
    const [icon, setIcon] = useState("view_list");
    const [viewMode, setViewMode] = useState("list");

    const onSwitch = () => {
        if (icon === 'view_list') {
            setIcon('view_module');
            setViewMode('module');
        } else {
            setIcon('view_list');
            setViewMode('list');
        }
    }

    return (
        <>
            <IconSwitch icon={icon} onSwitch={onSwitch}/>
            <CardsView cards={products} viewMode={viewMode}/>
        </>
    )
}

Store.propTypes = {}

export default Store
