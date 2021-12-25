import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

const posts = [
    {
     title: "My first post",
     excerpt: "This is my first post here",
     image: "https://cdnimg.rg.ru/img/content/214/17/88/22_d_850.jpg"
    },
   
    {
     title: "My second post",
     excerpt: "This is my second post here",
     image: "https://cdnimg.rg.ru/img/content/214/17/88/22_d_850.jpg"
    },
   
    {
     title: "My third post",
     excerpt: "This is my third post here",
     image: "https://cdnimg.rg.ru/img/content/214/17/88/22_d_850.jpg"
    },
   
    {
     title: "My fourth post",
     excerpt: "This is my fourth post here",
     image: "https://cdnimg.rg.ru/img/content/214/17/88/22_d_850.jpg"
    },
   
    {
     title: "My fifth post",
     excerpt: "This is my fifth post here",
     image: "https://cdnimg.rg.ru/img/content/214/17/88/22_d_850.jpg"
    },
   
    {
     title: "My sixth post",
     excerpt: "This is my sixth post here",
     image: "https://cdnimg.rg.ru/img/content/214/17/88/22_d_850.jpg"
    }
]

function Posts(props) {
  return (
    <div style={{ marginTop: 20, padding: 30 }}>
      <Grid container spacing={10} justify="space-evenly" width="250">
        {posts.map(post => (
          <Grid item key={post.title}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="220"
                  image={post.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography component="p">{post.excerpt}</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Posts;