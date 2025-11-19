import React from "react";

export default function TopBar() {
    return(
        <div style={{
            width: "100%",
            padding: "15px 30px",
            background: "rgba(0,0,0,0.45)",
            color: "#fff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "fixed",
            top: 0,
            left: 0,
            backdropFilter: "blur(6px)",
            boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
            zIndex: 10
        }}>
            {/*LOGO*/}
            <div style={{ fontSize: "1.5rem", fontWeight: "700"}}>LOGO</div>

            {/* Navigation Placeholders*/}
            <div style={{ display: "flex", gap: "25px", fontSize: "1.1rem", marginRight:"60px" }}>
                <span style={{ cursor: "pointer" }}>Home</span>
                <span style={{ cursor: "pointer" }}>Option 1</span>
                <span style={{ cursor: "pointer" }}>Option 2</span>
            </div>
        </div>
    )
}
