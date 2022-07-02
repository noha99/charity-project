package com.spring.project.model;

import javax.persistence.*;

@Entity
@Table(name = "project")
public class Project {

  @Id
  @Column(name = "id")
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  @Column(name = "title")
  private String title;

  @Column(name = "amount_needed")
  private Long amountNeeded;

  @Column(name = "donation")
  private Long donation;

  @Column(name = "details" , columnDefinition="TEXT")
  private String details;

  @Column(name = "category")
  private String category;

  @Column(name = "isDone")
  private boolean isDone;

  @Column(name = "place")
  private String place;

  @Column(name = "image" , columnDefinition="TEXT")
  private String image;

  @Column(name = "resposed_by")
  private String resposedBy;

  public Project() {
  }

  public Project(Long id, String title, Long amountNeeded, Long donation, String details, String category, boolean isDone, String place, String image, String resposedBy) {
    this.id = id;
    this.title = title;
    this.amountNeeded = amountNeeded;
    this.donation = donation;
    this.details = details;
    this.category = category;
    this.isDone = isDone;
    this.place = place;
    this.image = image;
    this.resposedBy = resposedBy;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public Long getAmountNeeded() {
    return amountNeeded;
  }

  public void setAmountNeeded(Long amountNeeded) {
    this.amountNeeded = amountNeeded;
  }

  public Long getDonation() {
    return donation;
  }

  public void setDonation(Long donation) {
    this.donation = donation;
  }

  public String getDetails() {
    return details;
  }

  public void setDetails(String details) {
    this.details = details;
  }

  public String getCategory() {
    return category;
  }

  public void setCategory(String category) {
    this.category = category;
  }

  public boolean isDone() {
    return isDone;
  }

  public void setDone(boolean done) {
    isDone = done;
  }

  public String getPlace() {
    return place;
  }

  public void setPlace(String place) {
    this.place = place;
  }

  public String getImage() {
    return image;
  }

  public void setImage(String image) {
    this.image = image;
  }

  public String getResposedBy() {
    return resposedBy;
  }

  public void setResposedBy(String resposedBy) {
    this.resposedBy = resposedBy;
  }
}
