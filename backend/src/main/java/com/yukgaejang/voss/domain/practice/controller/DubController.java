package com.yukgaejang.voss.domain.practice.controller;

import com.yukgaejang.voss.domain.practice.serivce.DubService;
import com.yukgaejang.voss.domain.practice.serivce.dto.response.ScriptListResponse;
import com.yukgaejang.voss.domain.practice.serivce.dto.response.ViewScriptResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/practice/dub")
@RequiredArgsConstructor
@RestController
public class DubController {

    private final DubService dubService;

    @GetMapping("/{scriptId}")
    public ResponseEntity<ViewScriptResponse> viewScript(@PathVariable("scriptId") Long id) {
        ViewScriptResponse viewScriptResponse = dubService.viewScript(id);
        return ResponseEntity.ok(viewScriptResponse);
    }

    @GetMapping
    public ResponseEntity<List<ScriptListResponse>> viewScriptList() {
        List<ScriptListResponse> scriptList = dubService.getScriptList();
        return ResponseEntity.ok(scriptList);
    }
}