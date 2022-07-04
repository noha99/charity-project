package com.spring.project.Service;

import com.spring.project.model.IndividualCase;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CaseRepository extends JpaRepository<IndividualCase, Long> {

}
