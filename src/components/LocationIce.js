import React from "react"
import locationIcon from "@iconify/icons-mdi/mountain"
import { Icon } from '@iconify/react'


const LocationIce = (lat, lng, onClick) => {
    return(
        <div className="location-marker-ice" onClick={onClick}>
            <Icon icon={locationIcon} className="location-ice" />
        </div>
    )
}

export default LocationIce