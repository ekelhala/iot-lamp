# Backend system for IoT Lamp

This Express server receives and processes the data from all the lamps. Commands to turn the lamps on or off are also received through this server.

## Structure

- `/api` - top-level route to access information of all devices
    - `/device` - read and write data to devices
        - `/{deviceId}`
            - `/sensors` - provides data on the environmental conditions of this device
                - `/temperature`
                - `/humidity`
            - `/light` - turn the light on/off
