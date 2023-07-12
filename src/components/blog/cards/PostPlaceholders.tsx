"use client";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

export default function PostPlaceholders() {
  return (
    <ul>
      <Grid container spacing={2}>
        {"6items".split("").map((item) => (
          <Grid xs={12} sm={6} md={4} key={item}>
            <div className="flex flex-col gap-2">
              <Skeleton variant="rounded" width="100%" height={150} />
              <Skeleton variant="rectangular" height={60} width="100%" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Skeleton variant="circular" width={40} height={40} />
                  <Skeleton
                    variant="text"
                    width={70}
                    sx={{ fontSize: "1rem" }}
                  />
                </div>
                <Skeleton
                  variant="text"
                  width={100}
                  sx={{ fontSize: "1rem" }}
                />
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </ul>
  );
}
