package com.spring.project.model;

import javax.persistence.*;

@Entity
@Table(name = "individualcase")
public class IndividualCase {

  @Id
  @Column(name = "id")
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  @Column(name = "name")
  private String name;

  @Column(name = "phone")
  private Long phone;

  @Column(name = "age")
  private Long age;

  @Column(name = "description" , columnDefinition="TEXT")
  private String description;

  @Column(name = "gender")
  private String gender;

  @Column(name = "governorate")
  private String governorate;

  @Column(name = "nationality")
  private String nationality;

  @Column(name = "reporterPhone")
  private Long reporterPhone;

  @Column(name = "reporterName")
  private String reporterName;

  @Column(name = "reporterAdress")
  private String reporterAdress;

  @Column(name = "amountNeeded")
  private Long amountNeeded;

  @Column(name = "donation")
  private Long donation;

  @Column(name = "approved")
  private Boolean approved;

  @Column(name = "isDone")
  private Boolean isDone;

  public IndividualCase() {
  }

  public IndividualCase(Long id, String name, Long phone, Long age, String description, String gender, String governorate, String nationality, Long reporterPhone, String reporterName, String reporterAdress, Long amountNeeded, Long donation, Boolean approved, Boolean isDone) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.age = age;
    this.description = description;
    this.gender = gender;
    this.governorate = governorate;
    this.nationality = nationality;
    this.reporterPhone = reporterPhone;
    this.reporterName = reporterName;
    this.reporterAdress = reporterAdress;
    this.amountNeeded = amountNeeded;
    this.donation = donation;
    this.approved = approved;
    this.isDone = isDone;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Long getPhone() {
    return phone;
  }

  public void setPhone(Long phone) {
    this.phone = phone;
  }

  public Long getAge() {
    return age;
  }

  public void setAge(Long age) {
    this.age = age;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public String getGender() {
    return gender;
  }

  public void setGender(String gender) {
    this.gender = gender;
  }

  public String getGovernorate() {
    return governorate;
  }

  public void setGovernorate(String governorate) {
    this.governorate = governorate;
  }

  public String getNationality() {
    return nationality;
  }

  public void setNationality(String nationality) {
    this.nationality = nationality;
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

  public Long getReporterPhone() {
    return reporterPhone;
  }

  public void setReporterPhone(Long reporterPhone) {
    this.reporterPhone = reporterPhone;
  }

  public String getReporterName() {
    return reporterName;
  }

  public void setReporterName(String reporterName) {
    this.reporterName = reporterName;
  }

  public String getReporterAdress() {
    return reporterAdress;
  }

  public void setReporterAdress(String reporterAdress) {
    this.reporterAdress = reporterAdress;
  }

  public Boolean getApproved() {
    return approved;
  }

  public void setApproved(Boolean approved) {
    this.approved = approved;
  }

  public Boolean getDone() {
    return isDone;
  }

  public void setDone(Boolean done) {
    isDone = done;
  }
}
