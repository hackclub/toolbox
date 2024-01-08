import styled from '@emotion/styled'
import { useState, useEffect } from 'react'
import { Box, Card, Embed } from 'theme-ui'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Tooltip,
  useMapEvents
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const mapIcon = new L.Icon({
  iconUrl: 'https://assets.hackclub.com/icon-rounded.png',
  iconRetinaUrl: 'https://assets.hackclub.com/icon-rounded.png',
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(20, 20),
  popupAnchor: [0, 0]
})

const StyledMapContainer = styled(MapContainer)`
  position: absolute;
  top: 0;
  left: 0;
`

function MapEvents({ showFrame }) {
  const map = useMapEvents({
    dblclick() {
      window.open('https://hackclub.github.io/map/', '_blank')
    }
  })
}

export default function Map() {
  const [clubs, setClubs] = useState([])
  const [center, setCenter] = useState(
    window.innerWidth > 767.98 ? [35.683, -25.099] : [55, -100]
  )
  const [frame, setFrame] = useState(false) // Originally used to overlay a map over entire page. Not in use right now

  useEffect(() => {
    fetch(
      'https://api2.hackclub.com/v0.1/Club%20Applications/Clubs%20Dashboard'
    )
      .then(res => res.json())
      .then(json => {
        setClubs(
          json
            .filter(
              club =>
                club.fields.Status &&
                club.fields.Status != 'inactive' &&
                club.fields.Status != 'unknown' &&
                club.fields.Latitude &&
                club.fields.Longitude
            )
            .map(club => ({
              latitude: club.fields.Latitude,
              longitude: club.fields.Longitude,
              venue: club.fields.Venue
            }))
        )
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      {/*
      <StyledMapContainer
        center={center}
        zoom={2.5}
        style={{ width: '100%', height: '500px' }}
        zoomControl={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {clubs.map((club, idx) => (
          <Marker
            position={[club.latitude, club.longitude]}
            key={idx}
            icon={mapIcon}
          >
            <Tooltip>{club.venue}</Tooltip>
          </Marker>
        ))}
        <MapEvents showFrame={() => setFrame(true)} />
      </StyledMapContainer>
        */}
      <iframe
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          border: 'none'
        }}
        src="https://directory.hackclub.com/MapPage?embed"
        height="500px"
        width="100%"
      />
      {frame === true && (
        <Box
          onClick={() => setFrame(false)}
          sx={{
            background: 'rgba(0, 0, 0, 0.1)',
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            zIndex: 9999,
            top: 0,
            left: 0
          }}
        >
          <style jsx global>{`
            body {
              max-height: 100vh;
              overflow: hidden;
            }
          `}</style>
          <Box
            sx={{
              borderRadius: 'extra',
              width: '80%',
              overflow: 'hidden',
              m: 'auto'
            }}
            onClick={event => event.stopPropagation()}
          >
            <Embed src="https://hackclub.github.io/map/" />
          </Box>
        </Box>
      )}
    </>
  )
}
