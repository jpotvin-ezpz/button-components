import React from 'react';
import Button from './Button';

const ButtonGallery = () => (
  <div className="gallery">
    <h1 className="gallery-header">Buttons</h1>
    <div className="btn-wrapper">
      <p>{'<Button />'}</p>
      <Button />
    </div>
    <div className="btn-wrapper">
      <p>{'<Button variant="outline"/> '}</p>
      <Button variant="outline" />
    </div>
    <div className="btn-wrapper">
      <p>{'<Button variant="text" />'}</p>
      <Button variant="text" />
    </div>
    <div className="btn-wrapper">
      <p>{'<Button disabledShadow />'}</p>
      <Button disabledShadow />
    </div>
    <div className="multiple-btns btns-disabled">
      <div className="btn-wrapper">
        <p>{'<Button disabled />'}</p>
        <Button disabled />
      </div>
      <div className="btn-wrapper">
        <p>{'<Button variant="text" disabled />'}</p>
        <Button variant="text" disabled />
      </div>
    </div>
    <div className="multiple-btns btns-icons">
      <div className="btn-wrapper">
        <p>{'<Button startIcon icon="cart" />'}</p>
        <Button startIcon icon="cart" />
      </div>
      <div className="btn-wrapper">
        <p>{'<Button endIcon icon="cart" />'}</p>
        <Button endIcon icon="cart" />
      </div>
    </div>
    <div className="multiple-btns btn-icon-variants">
      <div className="btn-wrapper">
        <p>{'<Button startIcon icon="article" />'}</p>
        <Button startIcon icon="cart" />
      </div>
      <div className="btn-wrapper">
        <p>{'<Button startIcon icon="cart" />'}</p>
        <Button startIcon icon="bookmark" />
      </div>
      <div className="btn-wrapper">
        <p>{'<Button startIcon icon="cart" />'}</p>
        <Button startIcon icon="explore" />
      </div>
      <div className="btn-wrapper">
        <p>{'<Button startIcon icon="favorite" />'}</p>
        <Button startIcon icon="favorite" />
      </div>
    </div>
    <div className="multiple-btns btns-sizes">
      <div className="btn-wrapper">
        <p>{'<Button size="sm" />'}</p>
        <Button size="sm" color="primary" />
      </div>
      <div className="btn-wrapper">
        <p>{'<Button size="md" />'}</p>
        <Button size="md" color="primary" />
      </div>
      <div className="btn-wrapper">
        <p>{'<Button size="lg" />'}</p>
        <Button size="lg" color="primary" />
      </div>
    </div>
    <div className="multiple-btns btns-colors">
      <div className="btn-wrapper">
        <p>{'<Button color="default" />'}</p>
        <Button color="defaut" innerText="Default" />
      </div>
      <div className="btn-wrapper">
        <p>{'<Button color="primary" />'}</p>
        <Button color="primary" innerText="Primary" />
      </div>
      <div className="btn-wrapper">
        <p>{'<Button color="secondary" />'}</p>
        <Button color="secondary" innerText="Secondary" />
      </div>
      <div className="btn-wrapper">
        <p>{'<Button color="danger" />'}</p>
        <Button color="danger" innerText="Danger" />
      </div>
    </div>
    <footer>
      <p>Icons: https://material.io/resources/icons</p>
      <p>created by jpotvin-ezpz - devChallenges.io</p>
    </footer>
  </div>
);

export default ButtonGallery;
