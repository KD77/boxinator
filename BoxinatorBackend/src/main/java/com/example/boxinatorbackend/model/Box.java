package com.example.boxinatorbackend.model;

public class Box {

    private long id;
    private String name;
    private int weight;
    private String color;
    private String country;
    private String price;

    public Box() {
    }

    public Box(long id, String name, int weight, String color, String country, String price) {
        this.id = id;
        this.name = name;
        this.weight = weight;
        this.color=color;
        this.country=country;
        this.price=price;
    }

    public Box(String name, int weight, String color,String country, String price) {
        this.name = name;
        this.weight = weight;
        this.color=color;
        this.country=country;
        this.price=price;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }
    public double multiple(String country, int weight){
        int cost=0;
        if (country == "Sweden") {
            cost= (int) (weight * 1.3);
        } else if (country == "China") {
            cost= (int)(weight * 4);
        } else if (country == "Brazil") {
            cost= (int) (weight * 8.6) ;
        } else if (country == "Australia") {
            cost= (int) (weight * 7.2 );
        }
        return cost;

    }
}
