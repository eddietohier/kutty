---
title: Dialog
---

## Basic

{{< code html >}}

<button class="btn btn-primary dialog-open" data-dialog="#demoDialog">Open Dialog</button>

<div class="dialog" id="demoDialog" aria-hidden="true">
  <div class="dialog-content">
    <div class="dialog-header">Dialog Title
      <button type="button" class="btn btn-light dialog-close" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
    </div>
    <div class="dialog-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae?</div>
    <div class="dialog-footer">
      <button type="button" class="btn btn-light dialog-close">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>

{{< /code >}}

## Sizes

{{< code html >}}

<div class="btn-list">
  <button class="btn btn-primary dialog-open" data-dialog="#smallDialog">Small Dialog</button>
  <button class="btn btn-primary dialog-open" data-dialog="#largeDialog">Large Dialog</button>
  <button class="btn btn-primary dialog-open" data-dialog="#fullDialog">Full Screen Dialog</button>
</div>

<div class="dialog dialog-sm" id="smallDialog" aria-hidden="true">
  <div class="dialog-content">
    <div class="dialog-header">Small Dialog
      <button type="button" class="btn btn-light dialog-close" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
    </div>
    <div class="dialog-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae?</div>
    <div class="dialog-footer">
      <button type="button" class="btn btn-light dialog-close">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>

<div class="dialog dialog-lg" id="largeDialog" aria-hidden="true">
  <div class="dialog-content">
    <div class="dialog-header">Large Dialog
      <button type="button" class="btn btn-light dialog-close" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
    </div>
    <div class="dialog-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae?</div>
    <div class="dialog-footer">
      <button type="button" class="btn btn-light dialog-close">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>

<div class="dialog dialog-full" id="fullDialog" aria-hidden="true">
  <div class="dialog-content">
    <div class="dialog-header">Full Screen Dialog
      <button type="button" class="btn btn-light dialog-close" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
    </div>
    <div class="dialog-body"><img class="w-5/6 mx-auto rounded" src="/og.png" /></div>
    <div class="dialog-footer">
      <button type="button" class="btn btn-light dialog-close">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>

{{< /code >}}

## Scrollable

{{< code html >}}

<button class="btn btn-primary dialog-open" data-dialog="#scrollableDialog">Open Dialog</button>

<div class="dialog" id="scrollableDialog" aria-hidden="true">
  <div class="dialog-content">
    <div class="dialog-header">Scrollable Dialog
      <button type="button" class="btn btn-light dialog-close" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
    </div>
    <div class="dialog-body">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae
    </div>
    <div class="dialog-footer">
      <button type="button" class="btn btn-light dialog-close">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>

{{< /code >}}

## Image Dialog

{{< code html >}}

<button class="btn btn-primary dialog-open" data-dialog="#imageDialog">Open Dialog</button>

<div class="dialog" id="imageDialog" aria-hidden="true">
  <div class="dialog-content">
    <div class="dialog-header"> kutty-og.png
      <button type="button" class="btn btn-light dialog-close" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
    </div>
    <img class="w-full rounded-b" src="/og.png" />
  </div>
</div>

{{< /code >}}
